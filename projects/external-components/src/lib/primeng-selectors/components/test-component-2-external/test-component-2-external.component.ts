{"import { DOCUMENT } from '@angular/common';\r\nimport {  Component, OnInit, AfterViewInit, Inject, ViewChild, ElementRef } from '@angular/core';\r\nimport { DomSanitizer } from \"@angular/platform-browser\";\r\nimport { ActivatedRoute, Params, Router } from '@angular/router';\r\nimport { CommonExternalComponent } from '../common-external/common-external.component';\r\n\r\n\r\n@Component({\r\n  selector: 'hmi-ext-iframe-external',\r\n  templateUrl: './iframe-external.component.html',\r\n  styleUrls: ":{"'./iframe-external.component.css'":" false;\r\n  navigationExtrasState: any;\r\n  @ViewChild('iframe') iframe: ElementRef | null = null;\r\n\r\n  constructor(private sanitizer: DomSanitizer,private readonly activatedRoute: ActivatedRoute) { \r\n    super();\r\n  }\r\n\r\n  ngOnInit(): void {\r\n    this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.fieldObj.customAttributes.src);\r\n  }\r\n\r\n  ngAfterViewInit(): void {\r\n    this.iframe?.nativeElement.addEventListener('load', ()=> {\r\n      // remove * in production\r\n      this.iframe?.nativeElement.contentWindow?.postMessage(this.activatedRoute.snapshot.params['projectId'],'*');\r\n    })\r\n  }\r\n\r\n}"}}