import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from'angularfire2/firestore';
import { Item } from '../models/Item';
import { Observable } from 'rxjs/Observable';//需要這個使資料observable
import 'firebase/storage';
import * as firebase from 'firebase/app'; // for typings
@Injectable()
export class ItemService {
  itemCollection: AngularFirestoreCollection<Item>;//data string
  items: Observable<Item[]>;//因為要有這個 所以要加入observable  initalizse as abservable with typeof item
  itemimg: AngularFirestoreCollection<Item>;
  constructor(public afs: AngularFirestore) { 
    this.items = this.afs.collection('items').valueChanges();//指的是上面observable的items  set into a collection 
  }
  
  getItems(){
    return this.items;
  }
}

