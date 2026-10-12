import { useState, useEffect, useRef } from 'react'
import '../styles/Resume.css'

const initialFormState = {
  userName: '',
  email: '',
  phone: '',
  dateOfStudyFrom: '',
  dateOfStudyTo: '',
  schoolName: '',
  titleOfStudy: '',
  dateOfWorkFrom: '',
  dateOfWorkTo: '',
  companyName: '',
  positionTitle: '',
  responsibilities: '',
}

export function Resume() {
  const [info, setInfo] = useState(() => {
    const savedInfo = localStorage.getItem('info');
    return savedInfo ? JSON.parse(savedInfo) : initialFormState;
  });

  const editDialogRef = useRef(null);
  const messageDialogRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(info));
  }, [info]);

  const currentYear = new Date().getFullYear();
  const startYears = Array.from(
    { length: currentYear - 1970 + 1 }, 
    (_, i) => currentYear - i
  );

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (action) => {
    if (action === 'open') {
      editDialogRef.current.showModal();
    } else {
      editDialogRef.current.close();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reportValidity();
    messageDialogRef.current.showModal();
  }

  const handleCloseMessageDialog = () => {
    messageDialogRef.current.close();
    editDialogRef.current.close();
  };

  return (
    <>
      <dialog ref={editDialogRef} className="edit-dialog">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="edit-section">
            <div>
              <label htmlFor="user-name">Name: </label>
              <input type="text" name="userName" value={info.userName} id="user-name" onChange={handleInput} required />
            </div>
            <div>
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" value={info.email} id="email" onChange={handleInput} required />
            </div>
            <div>
              <label htmlFor="phone">Phone: </label>
              <input type="tel" name="phone" value={info.phone} id="phone" maxLength={15} onChange={handleInput} required />
            </div>
          </div>
          <div className="edit-section">
            <h3 className='edit-section-title'>Educational experience</h3>
            <div>
              <label htmlFor="date-of-study-from">Date of study: From </label>
              <select name="dateOfStudyFrom" value={info.dateOfStudyFrom} id="date-of-study-from" onChange={handleInput} required>
                <option value="" disabled></option>
                {startYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <label htmlFor="date-of-study-to"> to </label>
              <select name="dateOfStudyTo" value={info.dateOfStudyTo} id="date-of-study-to" onChange={handleInput} required>
                <option value="" disabled></option>
                {startYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="school-name">School name: </label>
              <input type="text" name="schoolName" value={info.schoolName} id="school-name" onChange={handleInput} required />
            </div>
            <div>
              <label htmlFor="title-of-study">Title of study: </label>
              <input type="text" name="titleOfStudy" value={info.titleOfStudy} id="title-of-study" onChange={handleInput} required />
            </div>
          </div>
          <div className="edit-section">
            <h3 className='edit-section-title'>Practical experience</h3>
            <div>
              <label htmlFor="date-of-work-from">Date of work: From </label>
              <select name="dateOfWorkFrom" value={info.dateOfWorkFrom} id="date-of-work-from" onChange={handleInput} required>
                <option value="" disabled></option>
                {startYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <label htmlFor="date-of-work-to"> to </label>
              <select name="dateOfWorkTo" value={info.dateOfWorkTo} id="date-of-work-to" onChange={handleInput} required>
                <option value="" disabled></option>
                {startYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="company-name">Company name: </label>
              <input type="text" name="companyName" value={info.companyName} id="company-name" onChange={handleInput} required />
            </div>
            <div>
              <label htmlFor="position-title">Position title: </label>
              <input type="text" name="positionTitle" value={info.positionTitle} id="position-title" onChange={handleInput} required />
            </div>
            <div>
              <label htmlFor="responsibilities">Responsibilities: </label>
              <input type="text" name="responsibilities" value={info.responsibilities} id="responsibilities" onChange={handleInput} required />
            </div>
          </div>
          <div className="submit-btn-container">
            <button className="reset-btn" type="button" onClick={() => setInfo(initialFormState)}>Reset</button>
            <button className="close-edit-btn" type="button" onClick={() => handleEdit('close')}>Close</button>
            <button className="submit-btn" type="submit">Submit</button>
          </div>
        </form>
      </dialog>
      <dialog ref={messageDialogRef} className="message-dialog">
        <form>
          <div className="message-container">
            <p className="success-message">Successfully Submitted!</p>
            <p className="notice-message">(Don't worry, a practice site.)</p>
          </div>
          <button className="close-message-btn" type="button" onClick={handleCloseMessageDialog}>Close</button>
        </form>
      </dialog>
      <div className="wrapper">
        <header>
          <h1 className='app-title'>Odin CV Application</h1>
          <div className="edit-btn-container">
            <button className="edit-btn" type="button" onClick={() => handleEdit('open')}>Edit</button>
          </div>
        </header>
        <main className="content">
          <section>
            <p className="user-name user-info">{info.userName}</p>
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
            <h2 className='section-title'>Educational experience</h2>
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
            <div>
              <p>School name: </p>
              <p className='user-info'>{info.schoolName}</p>
            </div>
            <div>
              <p>Title of study: </p>
              <p className='user-info'>{info.titleOfStudy}</p>
            </div>
          </section>
          <section>
            <h2 className='section-title'>Practical experience</h2>
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
            <div>
              <p>Company name: </p>
              <p className='user-info'>{info.companyName}</p>
            </div>
            <div>
              <p>Position title: </p>
              <p className='user-info'>{info.positionTitle}</p>
            </div>
            <div>
              <p>Responsibilities: </p>
              <p className='user-info'>{info.responsibilities}</p>
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
