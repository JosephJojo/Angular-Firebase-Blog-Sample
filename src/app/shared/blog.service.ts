import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Blog } from './blog.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  postCollection: AngularFirestoreCollection<Blog>;
  postDoc: AngularFirestoreDocument<Blog>;

  constructor(private afs: AngularFirestore) { 
    this.postCollection = this.afs.collection('blogPosts', ref => ref.orderBy('created', 'desc'));
  }

  getPosts() {
    return this.postCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Blog
          const id = a.payload.doc.id
          return { id, ...data }
        })
      })
    );
  }

  getPost(id: string) {
    this.postDoc = this.afs.doc<Blog>(`blogPosts/${id}`);
    return this.postDoc.valueChanges();
  }

  newPost(post: Blog) {
    this.postCollection.add(post);
  }

  updatePost(id: string, post: Blog) {
    this.postDoc = this.afs.doc<Blog>(`blogPosts/${id}`);
    this.postDoc.update(post);
  }
}
