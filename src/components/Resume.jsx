import { useState, useEffect, useRef } from 'react'
import '../styles/Resume.css'

const initialFormState = {
  userName: '',
  email: '',
  phone: '',
  schoolName: '',
  titleOfStudy: '',
  dateOfStudyFrom: '',
  dateOfStudyTo: '',
  companyName: '',
  positionTitle: '',
  mainResponsibilities: '',
  dateOfWorkFrom: '',
  dateOfWorkTo: '',
}

export function Resume() {
  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem('info');
    return savedInfo ? JSON.parse(savedInfo) : initialFormState;
  });

  //const [errors, setErrors] = useState(true);
  const editDialogRef = useRef(null);
  const messageDialogRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(info));
  }, [info]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    /*
    if (!e.target.validity.valueMissing) {
      setErrors(false);
    } else {
      setErrors(true);
    }
    */
    setInfo((prev) => ({
      ...prev, [name]: value
    }));
  };

  const handleEdit = (action) => {
    if (action === 'open') {
      editDialogRef.current.showModal();
    } else {
      editDialogRef.current.close();
    }
  };

  const handleSubmit = (action, e) => {
    if (action === 'open') {
      e.preventDefault();
      /*
      const c = document.querySelector('.user-name');
      if (a.validity.valueMissing) {
        c.reportValidity();
        return;
      }

      let validationErrors = {};

      if (!info.userName.trim()) {
        validationErrors.userName = "Name is strictly required!";
      }

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      */
      messageDialogRef.current.showModal();
    } else {
      messageDialogRef.current.close();
      setInfo(initialFormState);
    }
  }

  return (
    <>
      <dialog ref={editDialogRef} className="edit-dialog">
        <form id="editor" onSubmit={(e) => handleSubmit('open', e)}>
          <div className="edit-section">
            <div>
              <label htmlFor="user-name">Name: </label>
              <input type="text" name="userName" value={info.userName} id="user-name" onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" value={info.email} id="email" onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input type="tel" name="phone" value={info.phone} id="phone" maxLength={15} onChange={handleInput} />
            </div>
          </div>
          <div className="edit-section">
            <h3>Educational experience</h3>
            <div>
              <label htmlFor="school-name">School name: </label>
              <input type="text" name="schoolName" value={info.schoolName} id="school-name" onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="title-of-study">Title of study: </label>
              <input type="text" name="titleOfStudy" value={info.titleOfStudy} id="title-of-study" onChange={handleInput} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-study-from">Date of study: From </label>
                <input type="number" name="dateOfStudyFrom" value={info.dateOfStudyFrom} id="date-of-study-from" min={1970} max={2030} onChange={handleInput} />
                <label htmlFor="date-of-study-to"> To </label>
                <input type="number" name="dateOfStudyTo" value={info.dateOfStudyTo} id="date-of-study-to" min={1970} max={2030} onChange={handleInput} />
              </div>
            </div>
          </div>
          <div className="edit-section">
            <h3>Practical experience</h3>
            <div>
              <label htmlFor="company-name">Company name: </label>
              <input type="text" name="companyName" value={info.companyName} id="company-name" onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="position-title">Position title: </label>
              <input type="text" name="positionTitle" value={info.positionTitle} id="position-title" onChange={handleInput} />
            </div>
            <div>
              <label htmlFor="main-responsibilities">Main responsibilities: </label>
              <input type="text" name="mainResponsibilities" value={info.mainResponsibilities} id="main-responsibilities" onChange={handleInput} />
            </div>
            <div>
              <div>
                <label htmlFor="date-of-work-from">Date of work: From </label>
                <input type="number" name="dateOfWorkFrom" value={info.dateOfWorkFrom} id="date-of-work-from" min={1970} max={2030} onChange={handleInput} />
                <label htmlFor="date-of-work-to"> To </label>
                <input type="number" name="dateOfWorkTo" value={info.dateOfWorkTo} id="date-of-work-to" min={1970} max={2030} onChange={handleInput} />
              </div>
            </div>
          </div>
          <div className="edit-btn-container">
            <button className="do-edit-btn" type="button" onClick={() => handleEdit('close')}>Edit</button>
            <button className="reset-btn" type="button" onClick={() => setInfo(initialFormState)}>Reset</button>
          </div>
        </form>
      </dialog>
      <dialog ref={messageDialogRef} className="message-dialog">
        <form>
          <div className="message-container">
            <p className="success-message">Successfully Submitted!</p>
            <p className="notice-message">(Don't worry, a practice site.)</p>
          </div>
          <button className="close-btn" type="button" onClick={() => handleSubmit('close')}>Close</button>
        </form>
      </dialog>
      <div className="wrapper">
        <header>
          <h1>Odin CV Application</h1>
          <div className="btn-container">
            <button className="edit-btn" type="button" onClick={() => handleEdit('open')}>Edit</button>
            <button className="submit-btn" type="submit" form="editor" onClick={(e) => handleSubmit('open', e)}>Submit</button>
          </div>
        </header>
        <main className="content">
          <section>
            <h2 className="user-name user-info">{info.userName}</h2>
            <div>
              <p>Email: </p>
              <p className='user-info'>{info.email}</p>
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
              <p className='user-info'>{info.schoolName}</p>
            </div>
            <div>
              <p>Title of study: </p>
              <p className='user-info'>{info.titleOfStudy}</p>
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
          <section>
            <h2>Practical experience</h2>
            <div>
              <p>Company name: </p>
              <p className='user-info'>{info.companyName}</p>
            </div>
            <div>
              <p>Position title: </p>
              <p className='user-info'>{info.positionTitle}</p>
            </div>
            <div>
              <p>Main responsibilities: </p>
              <p className='user-info'>{info.mainResponsibilities}</p>
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
        </main>
        <footer className="footer">
          <a className="link" href="https://daik102.github.io/homepage/" target="_blank">2026 Daik</a>
        </footer>
      </div>
    </>
  );
}
