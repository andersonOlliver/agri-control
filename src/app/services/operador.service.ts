import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(private readonly afs: AngularFirestore) {

  }

  obterAtividadesAExecutar() {
    return this.afs.collection('prescricao').snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        }))
      );
  }

  obterAtividade(id: string) {
    return this.afs.doc(`prescricao/${id}`).valueChanges();
  }


}
