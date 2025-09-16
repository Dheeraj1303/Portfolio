import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReportGeneratorComponent } from './components/report-generator/report-generator.component';
import { FullReportPdfService } from './services/full-report-pdf.service';

@NgModule({
  declarations: [
    AppComponent,
    ReportGeneratorComponent
    // Add other components as needed
  ],
  imports: [ BrowserModule ],
  providers: [ FullReportPdfService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
