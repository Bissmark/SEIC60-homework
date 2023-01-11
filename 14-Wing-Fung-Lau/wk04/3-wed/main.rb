require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'

def book_search(title)
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
    info = (HTTParty.get url).to_s

    thumbnail_index = info.index('"thumbnail": ') + '"thumbnail": '.length
    title_index = info.index('"title": ') + '"title": '.length
    authors_index = info.index('"authors": ') + '"authors": '.length
    publisher_index = info.index('"publisher": ') + '"publisher": '.length
    date_index = info.index('publishedDate": ') + 'publishedDate": '.length
  
    book_title = info[title_index + 1 .. info[title_index .. ].index('",') + title_index - 1]
    
    book_cover = info[thumbnail_index + 1 .. info[thumbnail_index .. ].index('},') + thumbnail_index - 11]

    publisher = info[publisher_index + 1 .. info[publisher_index .. ].index('",') + publisher_index - 1].gsub('"', '').to_s.split(" ").map(&:capitalize).join(" ").strip

    authors = info[authors_index + 1 .. info[authors_index .. ].index('],') + authors_index - 1].gsub('"', '').sub(publisher,'').strip

    authors = authors.chop if authors[-1] == ','

    date = info[date_index + 1 .. info[date_index .. ].index('",') + date_index - 1].gsub('"', '').strip
    
    if authors.include? ','
        authors_form = "Authors"
    else
        authors_form = "Author"
    end
    "<container>
        <img src=#{book_cover}>
        <div id='book_info'>
            <p>Title: #{book_title}</p>
            <p>#{authors_form}: #{authors}</p>
            <p>Publisher: #{publisher}</p>
            <p>Published date: #{date}</p>
        </div>
    </container>"
end

get '/' do
    popular_books = ["Xi Jinping: The Governance of China", "Quotations from Chairman Mao Tsetung", "Selected Works of Mao Zedong",  "The Dictator's Handbook", "The Dictator's Learning Curve", "Xi Jinping: The Governance of China", "Xi Jinping: The Governance of China", "Xi Jinping: The Governance of China", "Xi Jinping: The Governance of China"]
    book = popular_books.sample
    @book_details = book_search(book) 
    erb :home
end

get '/info' do
    book = params[:book]
    @book_details = book_search(book) 
    erb :info
end
