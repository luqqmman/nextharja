import { NextResponse } from 'next/server';
import db from '@/app/lib/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'articles'));
    const articles = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(articles, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: 'Error getting documents: ' + e.message }, { status: 400 });
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get('title');
  const content = formData.get('content');
  const date = formData.get('date');
  const image = formData.get('image');

  try {
    let imageUrl = '';
    if (image) {
      const storage = getStorage();
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(snapshot.ref);
    }

    const docRef = await addDoc(collection(db, 'articles'), {
      title,
      content,
      date,
      imageUrl,
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Error adding document: ' + e.message }, { status: 400 });
  }
}
