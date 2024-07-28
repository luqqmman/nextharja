import { NextResponse } from 'next/server';
import db from '@/app/lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { revalidateTag } from 'next/cache';

export async function GET() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const apiKey = process.env.FIREBASE_PROJECT_ID;
  const collection = 'umkm';
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}?key=${apiKey}`;
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
        tags: ['umkm'],
      },
    });

    if (!response.ok) {
        throw new Error(`Error fetching documents: ${response.statusText}`);
    }

    const data = await response.json();
    const umkm = data.documents.map(doc => {
        const fields = doc.fields;
        return {
            id: doc.name.split('/').pop(),
            ...Object.keys(fields).reduce((acc, key) => {
                if (fields[key].stringValue !== undefined) {
                    acc[key] = fields[key].stringValue;
                } else if (fields[key].timestampValue !== undefined) {
                    acc[key] = {
                        seconds: Math.floor(new Date(fields[key].timestampValue).getTime() / 1000),
                        nanoseconds: new Date(fields[key].timestampValue).getMilliseconds() * 1000000
                    };
                } else if (fields[key].integerValue !== undefined) {
                    acc[key] = parseInt(fields[key].integerValue, 10);
                } else if (fields[key].doubleValue !== undefined) {
                    acc[key] = parseFloat(fields[key].doubleValue);
                } else if (fields[key].booleanValue !== undefined) {
                    acc[key] = fields[key].booleanValue;
                } // Add more type handling as needed
                return acc;
            }, {})
        };
    });

    return NextResponse.json(umkm, {
        status: 200,
    });
  } catch (e) {
      return NextResponse.json({ error: 'Error getting documents: ' + e.message }, { status: 400 });
  }

}

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get('title');
  const content = formData.get('content');
  const address = formData.get('address');
  const image = formData.get('image');

  try {
    let imageUrl = '';
    if (image) {
      const storage = getStorage();
      const imageRef = ref(storage, `umkm/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    const docRef = await addDoc(collection(db, 'umkm'), {
      title,
      content,
      address,
      imageUrl,
    });

    revalidateTag('umkm');
    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Error adding document: ' + e.message }, { status: 400 });
  }
}
