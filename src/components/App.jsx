import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [info, setInfo] = useState({
    // Personal Info
    name: '',
    email: '',
    phone: '',
    // Education
    schoolName: '',
    titleOfStudy: '',
    dateOfStudyFrom: '',
    dateOfStudyTo: '',
    // Career
    companyName: '',
    positionTitle: '',
    mainResponsibilities: '',
    dateOfWorkFrom: '',
    dateOfWorkTo: '',
  });

  function handleDialog(mode, action) {
    if (mode === 'edit') {
      const dialog = document.querySelector('.dialog');

      if (action === 'open') {
        dialog.showModal();
      } else {
        dialog.close();
      }
    } else if (mode === 'submit') {
      const message = document.querySelector('.message');

      if (action === 'open') {
        message.showModal();
      } else {
        message.close();
      }
    }
  }

  function handleInput(e) {
    const { name, value } = e.target;
    
    setInfo((prev) => ({
      ...prev, [name]: value
    }));
  }

  return (
    <>
      <dialog className='dialog'>
        <form>
          <div className='dialog-section'>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input type="tel" name="phone" id="phone" maxLength={15} onChange={handleInput} />
            </div>
          </div>
          <div className='dialog-section'>
            <h3>Educational experience</h3>
            <div>
              <label htmlFor="school-name">School name: </label>
              <input type="text" name="schoolName" id="school-name" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="title-of-study">Title of study: </label>
              <input type="text" name="titleOfStudy" id="title-of-study" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-study-from">Date of study: From </label>
                <input type="number" name="dateOfStudyFrom" id="date-of-study-from" onChange={handleInput} />
                <label htmlFor="date-of-study-to"> To </label>
                <input type="number" name="dateOfStudyTo" id="date-of-study-to" onChange={handleInput} />
              </div>
            </div>
          </div>
          <div className='dialog-section'>
            <h3>Practical experience</h3>
            <div>
              <label htmlFor="company-name">Company name: </label>
              <input type="text" name="companyName" id="company-name" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="position-title">Position title: </label>
              <input type="text" name="positionTitle" id="position-title" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="main-responsibilities">Main responsibilities: </label>
              <input type="text" name="mainResponsibilities" id="main-responsibilities" maxLength={30} onChange={handleInput} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-work-from">Date of work: From </label>
                <input type="number" name="dateOfWorkFrom" id="date-of-work-from" onChange={handleInput} />
                <label htmlFor="date-of-work-to"> To </label>
                <input type="number" name="dateOfWorkTo" id="date-of-work-to" onChange={handleInput} />
              </div>
            </div>
          </div>
          <div className='dialog-btn-container'>
            <button className='edit-btn' type='button' onClick={() => handleDialog('edit', 'close')}>Edit</button>
          </div>
        </form>
      </dialog>
      <dialog className='message'>
        <form>
          <div className='message-container'>
            <p className='success-message'>Successfully Submitted!</p>
            <p className='notice-message'>(Don't worry, this is a practice site.)</p>
          </div>
          <button className='close-btn' onClick={() => handleDialog('submit', 'close')}>Close</button>
        </form>
      </dialog>
      <div className='wrapper'>
        <h1>Odin CV Application</h1>
        <div className='btn-container'>
          <button className='edit-btn' onClick={() => handleDialog('edit', 'open')}>Edit</button>
          <button className='submit-btn' onClick={() => handleDialog('submit', 'open')}>Submit</button>
        </div>
        <div className='content'>
          <section className='general-section'>
          <h2 className='user-name'>{info.name}</h2>
          <div>
            <p>Email: </p>
            <p>{info.email}</p>
          </div>
          <div>
            <p>Phone: </p>
            <p>{info.phone}</p>
          </div>
          </section>
          <section>
            <h2>Educational experience</h2>
            <div>
              <p>School name: </p>
              <p>{info.schoolName}</p>
            </div>
            <div>
              <p>Title of study: </p>
              <p>{info.titleOfStudy}</p>
            </div>
            <div>
              <div>
                <p>Date of study: From </p>
                <p>{info.dateOfStudyFrom}</p>
              </div>
              <div>
                <p>to </p>
                <p>{info.dateOfStudyTo}</p>
              </div>
            </div>
          </section>
          <section className='practical-section'>
            <h2>Practical experience</h2>
            <div>
              <p>Company name: </p>
              <p>{info.companyName}</p>
            </div>
            <div>
              <p>Position title: </p>
              <p>{info.positionTitle}</p>
            </div>
            <div>
              <p>Main responsibilities: </p>
              <p>{info.mainResponsibilities}</p>
            </div>
            <div>
              <div>
                <p>Date of work: From </p>
                <p>{info.dateOfWorkFrom}</p>
              </div>
              <div>
                <p>to </p>
                <p>{info.dateOfWorkTo}</p>
              </div>
            </div>
          </section>
        </div>
        <div className='link-container'>
          <a className='link' href='https://daik102.github.io/homepage/' target='_blank'>2026 Daik</a>
        </div>
      </div>
    </>
  );
}

export default App
