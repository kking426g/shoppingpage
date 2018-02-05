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
  constructor(private itemService: ItemService) {

// Get a reference to the storage service, which is used to create references in your storage bucket


  }

  ngOnInit() { //lifecycle function
    this.itemService.getItems().subscribe(items =>{
      //console.log(items);
      this.items = items;
    })
  }
}


