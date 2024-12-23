import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Note from './components/Note'
import Notes_Itmes from './components/Notes_Items'

function CreateNotes(NotesItme){
  return (
    <Note
      key= {NotesItme.id}
      title= {NotesItme.title}
      content= {NotesItme.content}
    />
  );
}

function App() {

  return (
    <div>
      <Header />
      {Notes_Itmes.map(CreateNotes)}
      <Footer />   
    </div>
    
  )
}

export default App;
