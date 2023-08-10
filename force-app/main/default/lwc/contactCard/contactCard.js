import { LightningElement} from 'lwc';
import DFImage from "@salesforce/resourceUrl/DreamforceImage";

export default class ContactCard extends LightningElement {
  dreamforceImage = DFImage;    
  isDreamforceCompleted;
  
  completeDreamforce() {
    this.isDreamforceCompleted = true;
  }
}