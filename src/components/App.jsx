import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [info, setInfo] = useState({});

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

  return (
    <>
      <dialog className='dialog'>
        <form>
          <div className='dialog-section'>
            <div>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" maxLength={30} onChange={e => setInfo({ ...info, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" id="email" maxLength={30} onChange={e => setInfo({ ...info, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input type="tel" name="phone" id="phone" maxLength={15} onChange={e => setInfo({ ...info, phone: e.target.value })} />
            </div>
          </div>
          <div className='dialog-section'>
            <h3>Educational experience</h3>
            <div>
              <label htmlFor="school-name">School name: </label>
              <input type="text" name="school-name" id="school-name" maxLength={30} onChange={e => setInfo({ ...info, schoolName: e.target.value })} />
            </div>
            <div>
              <label htmlFor="title-of-study">Title of study: </label>
              <input type="text" name="title-of-study" id="title-of-study" maxLength={30} onChange={e => setInfo({ ...info, titleOfStudy: e.target.value })} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-study-from">Date of study: From </label>
                <input type="number" name="date-of-study-from" id="date-of-study-from" onChange={e => setInfo({ ...info, dateOfStudyFrom: e.target.value })} />
                <label htmlFor="date-of-study-to"> To </label>
                <input type="number" name="date-of-study-to" id="date-of-study-to" onChange={e => setInfo({ ...info, dateOfStudyTo: e.target.value })} />
              </div>
            </div>
          </div>
          <div className='dialog-section'>
            <h3>Practical experience</h3>
            <div>
              <label htmlFor="company-name">Company name: </label>
              <input type="text" name="company-name" id="company-name" maxLength={30} onChange={e => setInfo({ ...info, companyName: e.target.value })} />
            </div>
            <div>
              <label htmlFor="position-title">Position title: </label>
              <input type="text" name="position-title" id="position-title" maxLength={30} onChange={e => setInfo({ ...info, positionTitle: e.target.value })} />
            </div>
            <div>
              <label htmlFor="main-responsibilities">Main responsibilities: </label>
              <input type="text" name="main-responsibilities" id="main-responsibilities" maxLength={30} onChange={e => setInfo({ ...info, mainResponsibilities: e.target.value })} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-work-from">Date of work: From </label>
                <input type="number" name="date-of-work-from" id="date-of-work-from" onChange={e => setInfo({ ...info, dateOfWorkFrom: e.target.value })} />
                <label htmlFor="date-of-work-to"> To </label>
                <input type="number" name="date-of-work-to" id="date-of-work-to" onChange={e => setInfo({ ...info, dateOfWorkTo: e.target.value })} />
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
