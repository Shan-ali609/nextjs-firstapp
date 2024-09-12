import React from 'react'
import '@/components/pagemarkup/heading.css'
export default function Headings() {
    const tags = [
        {
            title:'Address Tag',
            paragraph: '1 Infinite Loop'
        },
        {
            title:'Anchor Tag (aka. Link)',
            paragraph: 'This is an example of a link.'
        },
        {
            title:'Abbreviation Tag',
            paragraph: 'The abbreviation srsly stands for “seriously”.'
        },
        {
            title:'Acronym Tag',
            paragraph: 'The acronym ftw stands for “for the win”.'
        },
        {
            title:'Big Tag',
            paragraph: 'These tests are a big deal, but this tag is no longer supported in HTML5.'
        },
        {
            title:'Cite Tag',
            paragraph: '“Code is poetry.” —Automattic'
        },
        {
            title:'Emphasize Tag',
            paragraph: 'The emphasize tag should italicize text.'
        },
        {
            title:'Insert Tag',
            paragraph: 'This tag should denote inserted text.'
            
        },
        {
            title:'Cite Tag',
            paragraph: '“Code is poetry.” —Automattic'
        },
        {
            title:'Cite Tag',
            paragraph: '“Code is poetry.” —Automattic'
        },
        {
            title:'Cite Tag',
            paragraph: '“Code is poetry.” —Automattic'
        },

    ]
  return (
    <>
      
     <div className='heading-sections'>
        <h6 className='main-todo'>Headings</h6>

          <div className='pop-ups'>
            <h1 >Header One</h1>
            <h2>Header Two</h2> 
            <h3>Header Three</h3>
            <h4>Header Four</h4>
            <h5>Header Five</h5>
            <h6>Header Six</h6>
          </div>
     </div>

  
  <div>

    <h2 className='quotes'>Blockquotes</h2>
    <p className='single-line'>Single line blockquote:</p>
    <p className='folish'>"Stay hungry. Stay foolish."</p>
    <p className='single-line'>Multi line blockquote with a cite reference:</p>
    <p className='folish'>"People think focus means saying yes to the thing you’ve got to focus on. But that’s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I’m actually as proud of the things we haven’t done as the things 
        I have done. Innovation is saying no to 1,000 things. Steve Jobs – Apple Worldwide Developers’ Conference, 1997"</p>
  </div>



   <div>

   <h2  className='quotes'>Tables</h2>
   
      <div className='table-hero'>
        <p className='name-head'> Employee	</p>
        <p className='name-head'> Salary	</p>
      </div>
      <div className='table-hero'>
        <p className='name-color'> jane	</p>
        <p className='salary'> $1	</p>
        <p className='name-head1'>	Because that’s all Steve Job’ needed for a salary.</p>
      </div>
      <div className='table-hero'>
        <p className='name-color'> jhon	</p>
        <p className='salary'> $2	</p>
        <p className='name-head1'>For all the blogging he does.</p>
      </div>
      <div className='table-hero'>
        <p className='name-color'> joye	</p>
        <p className='salary'> $3	</p>
        <p className='name-head1'>Pictures are worth a thousand words, right? So Tom x 1,000.</p>
      </div>
      <div className='table-hero'>
        <p className='name-color'> jane	</p>
        <p className='salary'> $1	</p>
        <p className='name-head1'>With hair like that?! Enough said…</p>
      </div>
       

   </div>




   <div>

   <h2  className='quotes'>Definition Lists</h2>

   <div>
   <h6 className='main-todo1'>Headings</h6>
    <p className='name-head2'>With hair like that?! Enough said…</p>
   </div>
   
   <div>
   <h6 className='main-todo1'>Startup</h6>
    <p className='name-head2'>A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.</p>
   </div>
   
   <div>
   <h6 className='main-todo1'>#dowork</h6>
    <p className='name-head2'>Coined by Rob Dyrdek and his personal body guard Christopher “Big Black” Boykins, “Do Work” works as a self motivator, to motivating your friends.
    </p>
   </div>
   
   <div>
   <h6 className='main-todo1'>Do It Live</h6>
    <p className='name-head2'>I’ll let Bill O’Reilly will explain this one.</p>
   </div>


   </div>





   <div>
   <h2  className='quotes'>Unordered Lists (Nested)</h2>
    <ul className='unorder-list'>
        <li>List item one
        <ul className='unorder-list'>
        <li>List item one</li>
        <li>List item two
        <ul className='unorder-list'>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
        
    </ul>
        </li>
        <li>List item three</li>
        <li>List item four</li>
        
    </ul>

        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
        
    </ul>

   </div>




   <div>
   <h2  className='quotes'>Unordered Lists (Nested)</h2>
    <ol className='order-list-count'>
        <li>List item one
        <ul className='order-list-count'>
        <li>List item one</li>
        <li>List item two
        <ul className='order-list-count'>
        <li>List item one</li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
        
    </ul>
        </li>
        <li>List item three</li>
        <li>List item four</li>
        
    </ul>

        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
        
    </ol>

   </div>


   <h2  className='quotes'>HTML Tags</h2>
      
      
      {tags.map((items,props)=>(
        <div key={props}>
    
        <h6 className='main-todo1'>{items.title}</h6>
        <p className='single-line1'>{items.paragraph}</p>
        </div>
      ))}
      



    </>
  )
}
