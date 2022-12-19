import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import {v4 as uuidv4 } from 'uuid'

@Injectable()
export class BookService {
    public books: Book[] = [];

    //add book
    addBookService(book: Book): string {
        // auto genrate id
        book.id = uuidv4()
        this.books.push(book);
        return 'Book has been successfully added';
    }

    //delete book
    deleteBookService(bookId: string): string { 
        this.books = this.books.filter((book)=> {
            return book.id != bookId;
        });
        return "Book has been deleted";
        
    }

    //update book
    updateBookService(book: Book): string {
        let index = this.books.findIndex((currentBook)=> {
            return currentBook.id == book.id;
        });
        this.books[index] = book;
        return `Book has been successfully update`;
    }

    //find all book
    findAllBooks(): Book[] {
        return this.books;
    }
}