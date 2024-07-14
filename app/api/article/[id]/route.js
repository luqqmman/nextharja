import { NextResponse } from 'next/server';
import db from '@/app/lib/firebase';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';


export async function GET(req, {params}) {
    const id = params.id;
    try {
        const docRef = doc(db, 'articles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json({ id: docSnap.id, ...docSnap.data() }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Document not found' }, { status: 404 });
        }
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
    const date = formData.get('date');
    const newImage = formData.get('image');
    try {
      const docRef = doc(db, 'articles', id);
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
        const newImageRef = ref(storage, `images/${newImage.name}`);
        const snapshot = await uploadBytes(newImageRef, newImage);
        imageUrl = await getDownloadURL(snapshot.ref);
      }
  
      await updateDoc(docRef, {
        title,
        content,
        date,
        imageUrl,
        updatedAt: new Date(),
      });
  
      return NextResponse.json({ id }, { status: 200 });
    } catch (e) {
        console.log(e.message)
      return NextResponse.json({ error: 'Error updating document: ' + e.message }, { status: 400 });
    }
  }
  
  export async function DELETE(req, {params}) {
    const { searchParams } = new URL(req.url);
    const id = params.id;
  
    try {
      const docRef = doc(db, 'articles', id);
      const docSnap = await getDoc(docRef);
      const imageUrl = docSnap.data().imageUrl;
  
      if (imageUrl) {
        const storage = getStorage();
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      }
  
      await deleteDoc(docRef);
  
      return NextResponse.json({ id }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: 'Error deleting document: ' + e.message }, { status: 400 });
    }
  }
