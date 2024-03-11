import './App.css'
import MarkdownSanitized from './components/MarkdownSanitized'
import RawInputArea from './components/RawInputArea'
import { markdownContext } from './context/context'
import useMarkdownEditor from './hooks/useMarkdownEditor'

function App() {
  const { data, handleChange } = useMarkdownEditor();
  return (
    <markdownContext.Provider value={{ data, handleChange }} >
      <div className='container'>
        <MarkdownSanitized />
        <RawInputArea />
      </div>
    </markdownContext.Provider>
  )
}

export default App
