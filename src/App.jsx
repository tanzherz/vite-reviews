import { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(1)
  const { name, job, image, text } = people[index]

  const checkNumber = (number) => {
    if (number > people.length - 1) return 0
    if (number < 0) return people.length - 1
    return number
  }

  const next = () => {
    // if (people.length - 1 === index) return setIndex(0)
    // setIndex(index + 1) //both works
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
  }
  const prev = () => {
    // if (index === 0) return setIndex(people.length - 1)
    // setIndex(index - 1)
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)

    if (randomNumber === index) {
      randomNumber = randomNumber + 1
    }

    setIndex(checkNumber(randomNumber))
  }

  return (
    <main>
      <section className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button type='button' className='prev-btn' onClick={prev}>
            <FaChevronLeft />
          </button>
          <button type='button' className='next-btn' onClick={next}>
            <FaChevronRight />
          </button>
        </div>
        <button type='button' className='btn' onClick={randomPerson}>
          surprise me{' '}
        </button>
      </section>
    </main>
  )
}
export default App
