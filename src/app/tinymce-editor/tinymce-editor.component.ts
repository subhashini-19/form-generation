import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tinymce-editor',
  templateUrl: './tinymce-editor.component.html',
  styleUrls: ['./tinymce-editor.component.scss']
})
export class TinymceEditorComponent implements OnInit {

  @Input() required = false;
  @Input() requiredError = '';
  // tslint:disable: no-input-rename
  @Input('tinymceData') tinymceData = '';
  @Input('controlName') public controlName = 'tinyMce';
  @Input('parentForm') public parentForm: FormGroup;

  tinymceForm: FormGroup;
  data;

  constructor(public formBuilder: FormBuilder) {

  }
  send(){
    console.log(this.tinymceData)
  }

  ngOnInit() {
    this.tinymceForm = this.formBuilder.group({
      tinymce: this.formBuilder.control('')
    });
    this.tinymceForm.get('tinymce').setValue(this.tinymceData);
    if (this.required) {
      this.tinymceForm.get('tinymce').setValidators([Validators.required]);
    }
    this.tinymceForm.updateValueAndValidity();
    if (this.parentForm) {
      this.parentForm.addControl(this.controlName, this.tinymceForm);
    }


    this.data = {
      plugins: 'tinymceEmoji emoticons  autoresize advlist autolink lists link image charmap print preview anchor textcolor searchreplace visualblocks code fullscreen insertdatetime media table code help paste',
      //menubar: false,
      branding: false,
      toolbar1: 'formatselect | fontselect | fontsizeselect | link unlink | code spellchecker fullscreen image| alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |',
      toolbar2: ' tinymceEmoji emoticons forecolor backcolor | bold italic underline strikethrough sub sup| bullist numlist blockquote | alignleft aligncenter alignright',
      resize: 'true',
      min_width: 400,
      height: 500,
      smart_paste: false,
      // paste_block_drop: false,
      // paste_data_images: true,
      autoresize_min_height: 500,
      autoresize_max_height: 500,
      content_css: '/test/style/tinymce.css',
      language_url: null,
      toolbar_location: 'bottom',
      // skin: 'outside',
      // image_advtab: true,
     // theme : 'advanced',
      //theme: 'modern',
      file_picker_callback: function (callback, value, meta) {

        if (meta.filetype == 'file') {
          callback('mypage.html', { text: 'My text' });
        }


        if (meta.filetype == 'image') {
          callback('myimage.jpg', { alt: 'My alt text' });
        }


        if (meta.filetype == 'media') {
          callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
        }
  
      },
      paste_data_images: true,





    }
    this.tinymceForm.get('tinymce').valueChanges.pipe(
    ).subscribe(resp => {
      console.log(resp);
    });
  

  }


}
