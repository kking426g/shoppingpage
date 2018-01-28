import { Component, OnInit, Inject  } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { ItemService } from '../../service/item.service';
import * as firebase from 'firebase/app'; // for typings

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  template: '<img [src]="image">'
})
export class ItemsComponent implements OnInit {
  image: string;
  constructor(private itemService: ItemService, firebaseApp: FirebaseApp) {

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebaseApp.storage();
// Create a storage reference from our storage service
var storageRef = storage.ref();
// Create a child reference
var imagesRef = storageRef.child('images');
// Child references can also take paths delimited by '/'
var spaceRef = storageRef.child('images/space.jpg');

    //const storageRef = firebaseApp.storage().ref().child('images/1.jpg');
    spaceRef.getDownloadURL().then(url => this.image = url);
  }

  ngOnInit() { //lifecycle function
    this.itemService.getItems().subscribe(items =>{
      console.log(items);
    })
  }

}


