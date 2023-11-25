import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MyCustomDirective } from './directives/my-custom.directive';
import { DynamicStyleDirective } from './directives/dynamic-style.directive';
import { CapatlizeWordDirective } from './directives/capatlize-word.directive';
import { MyLowerCasePipe } from './pipes/my-lower-case.pipe';
import { SearchPipePipe } from './pipes/search-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    DataBindingComponent,
    EventBindingComponent,
    ProductComponent,
    DirectivePracticeComponent,
    ProductListComponent,
    MyCustomDirective,
    DynamicStyleDirective,
    CapatlizeWordDirective,
    MyLowerCasePipe,
    SearchPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SearchPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
