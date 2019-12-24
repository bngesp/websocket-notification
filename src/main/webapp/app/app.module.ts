import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestSharedModule } from 'app/shared/shared.module';
import { TestCoreModule } from 'app/core/core.module';
import { TestAppRoutingModule } from './app-routing.module';
import { TestHomeModule } from './home/home.module';
import { TestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestSharedModule,
    TestCoreModule,
    TestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestEntityModule,
    TestAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class TestAppModule {}
