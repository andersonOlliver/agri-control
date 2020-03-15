import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  constructor(private readonly afs: AngularFirestore) { }

  obterPrescricao() {
    return this.afs.collection('prescricao').snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }
}
