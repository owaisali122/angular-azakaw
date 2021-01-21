import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { UserCardComponent } from './user-card/user-card.component';



@NgModule({
  declarations: [FeedCardComponent, UserCardComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NgbModule,
    FeedCardComponent,
    UserCardComponent

  ],
  providers: []
})
export class SharedModule { }
