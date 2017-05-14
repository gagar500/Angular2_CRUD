import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.template.html'
})

export class PaginationComponent implements OnChanges {


    @Input() items = [];
    @Input() pageSize = 10;
    currentPage;
    @Output('page-changed') pageChanged = new EventEmitter();

    isVisible = false;
    pages = [];




    ngOnChanges(): void {
        this.currentPage = 1;

        console.log('page:' + this.items.length);
        this.isVisible = false;
        if (this.items.length > this.pageSize) {
            this.pages = [];
            this.isVisible = true;
            var pages = Math.ceil(this.items.length / this.pageSize);
            for (let i = 1; i <= pages; i++) {
                this.pages.push(i);
            }

        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    }

    previous() {
        if (this.currentPage == 1)
            return;

        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }
    next() {
        if (this.currentPage == this.pages.length)
            return;

        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }
}