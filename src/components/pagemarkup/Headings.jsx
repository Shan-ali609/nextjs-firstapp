import React from 'react'
import '@/components/pagemarkup/heading.css'
export default function Headings() {
    const tags = [
        {
            title:'Address Tag',
            paragraph1: '1 Infinite Loop',
            
        },
        {
            title:'Anchor Tag (aka. Link)',
            paragraph: 'This is an example of a link.'
        },
        {
            title:'Abbreviation Tag',
            paragraph3: 'The abbreviation srsly stands for ',
            para1 : 'seriously.'
        },
        {
            title:'Acronym Tag',
            paragraph: 'The acronym ftw stands for for the win.'
        },
        {
            title:'Big Tag',
            paragraph: 'These tests are a big deal, but this tag is no longer supported in HTML5.'
        },
        {
            title:'Cite Tag',
            paragraph: 'Code is poetry. Automattic'
        },
        {
            title:'Emphasize Tag',
            paragraph: 'The emphasize tag should italicize text.'
        },
        {
            title:'Insert Tag',
            paragraph5: 'This tag should denote ',
            para6: 'inserted text.'
            
        },
        {
            title:'Cite Tag',
            paragraph: 'Code is poetry. Automattic'
        },
        {
            title:'Keyboard Tag',
            paragraph8: 'This scarcely known tag emulates keyboard text, which is usually styled like the',
            para9:' <code> tag.'
        },
        {
            title:'Preformatted Tag',
            paragraph: 'This tag styles large blocks of code.'
        },

    ]
  return (
    <>
      
     <div className='heading-sections'>
        <h6 className='main-todo'>Headings</h6>

          <div className='pop-ups'>
            <h1 >Header One</h1>
            <h2>Header Two</h2> 
            <h3 style={{color:'black'}}>Header Three</h3>
            <h4>Header Four</h4>
            <h5>Header Five</h5>
            <h6>Header Six</h6>
          </div>
     </div>

  
  <div>

    <h2 className='quotes'>Blockquotes</h2>
    <p className='single-line'>Single line blockquote:</p>
    <p className='folish'>`&quoStay hungry. Stay foolish.`&quo</p>
    <p className='single-line'>Multi line blockquote with a cite reference:</p>
    <p className='folish'>`&quoPeople think focus means saying yes to the thing you&quot;ve got to focus on. But that&quot;s not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I&quot;m actually as proud of the things we haven&quot;t done as the things 
        I have done. Innovation is saying no to 1,000 things. Steve Jobs Apple Worldwide Developers Conference, 1997`&quo</p>
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
        <p className='name-head1'>	Because that&ldquo;s all Steve Job&ldquo; needed for a salary.</p>
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
    <p className='name-head2'>I&quot;ll let Bill O&quot;Reilly will explain this one.</p>
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
        <p className='single-line1'>{items.paragraph3} <span className='nd-para'>{items.para1}</span> </p>
        <p className='single-line1'>{items.paragraph5} <span className='sd-para'>{items.para6}</span> </p>
        <p className='single-line1'>{items.paragraph8} <span className='sd-para'>{items.para9}</span> </p>
        </div>
      ))}
      

      <div className='post-title'>
       
       <div >
       <p className='post-pose'>.post-title &#123;
       <div className='todo'>
        <p> 	margin: 0 0 5px;
        </p>
        <p>  font-weight: bold; </p>
        <p>  font-size: 38px;
        </p>
        <p> 	line-height: 1.2;  </p>
       </div>
       &#123;  </p>
       </div>

      </div>



    </>
  )
}
