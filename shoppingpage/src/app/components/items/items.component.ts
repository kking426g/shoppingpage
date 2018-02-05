import { Component, OnInit, Inject  } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { ItemService } from '../../service/item.service';
import * as firebase from 'firebase/app'; // for typings
import { Item } from '../../models/Item';
import { ItemImg } from '../../models/ItemImg';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  image: string;
  constructor(private itemService: ItemService, private firebaseApp: FirebaseApp) {
  }

  ngOnInit() { //lifecycle function
    this.itemService.getItems().subscribe(items =>{
      this.items = items;
    })

    this.firebaseApp.storage().ref('images/1.jpg').getDownloadURL().then(function(url) {
      console.log("la url ", url)
    })

  }
}


