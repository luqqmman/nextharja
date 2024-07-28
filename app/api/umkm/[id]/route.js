import { NextResponse } from 'next/server';
import db from '@/app/lib/firebase';
import getValue from '@/app/lib/getValue';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { revalidateTag } from 'next/cache';


export async function GET(req, { params }) {
  const id = params.id;
  const projectId = process.env.FIREBASE_PROJECT_ID;  // Ganti dengan project ID Firebase Anda
  const apiKey = process.env.FIREBASE_API_KEY;  // Ganti dengan API key Firebase Anda
  const collection = 'umkm';  // Ganti dengan nama koleksi Firestore Anda
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}/${id}?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 3600,
        tags: [id],
      },
    });      
      if (!response.ok) {
          if (response.status === 404) {
              return NextResponse.json({ error: 'Document not found' }, { status: 404 });
          }
          throw new Error(`Error fetching document: ${response.statusText}`);
      }

      const data = await response.json();
      const document = getValue(data.fields);      

      return NextResponse.json({
          id: data.name.split('/').pop(),
          ...document
      }, {
          status: 200,
      });
  } catch (e) {
      return NextResponse.json({ error: 'Error getting document: ' + e.message }, { status: 400 });
  }
}

export async function PUT(req, {params}) {
    const { searchParams } = new URL(req.url);
    const id = params.id;
    const formData = await req.formData();
    const title = formData.get('title');
    const content = formData.get('content');
    const address = formData.get('address');
    const newImage = formData.get('image');
    try {
      const docRef = doc(db, 'umkm', id);
      const docSnap = await getDoc(docRef);
      let imageUrl = docSnap.data().imageUrl || '';
  
      if (newImage) {
        // Hapus gambar lama jika ada
        if (imageUrl) {
          const storage = getStorage();
          const oldImageRef = ref(storage, imageUrl);
          await deleteObject(oldImageRef);
        }
  
        // Unggah gambar baru
        const storage = getStorage();
        const newImageRef = ref(storage, `umkm/${newImage.name}`);
        const snapshot = await uploadBytes(newImageRef, newImage);
        imageUrl = await getDownloadURL(snapshot.ref);
      }
  
      await updateDoc(docRef, {
        title,
        content,
        address,
        imageUrl,
        updatedAt: new Date(),
      });
  
      revalidateTag('umkm');
      revalidateTag(id);
      return NextResponse.json({ id }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: 'Error updating document: ' + e.message }, { status: 400 });
    }
  }
  
  export async function DELETE(req, {params}) {
    const { searchParams } = new URL(req.url);
    const id = params.id;
  
    try {
      const docRef = doc(db, 'umkm', id);
      const docSnap = await getDoc(docRef);
      const imageUrl = docSnap.data().imageUrl;
  
      if (imageUrl) {
        const storage = getStorage();
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }
  
      await deleteDoc(docRef);

      revalidateTag('umkm');
      revalidateTag(id);
      return NextResponse.json({ id }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: 'Error deleting document: ' + e.message }, { status: 400 });
    }
  }
