import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private fireStore: AngularFirestore) { }

  getProjects() {
    return this.fireStore.collection("test").snapshotChanges();
  }
}
