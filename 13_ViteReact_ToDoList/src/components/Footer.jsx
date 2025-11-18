import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0"> <i class="bi bi-c-circle"></i> 2025 My Website. All Rights Reserved.</p>
      <div className="row mt-3">
        <div className="col">
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-github h5"></i>  
                <i>github.com/rahul-das-java-developer</i>
            </a>
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-github h5"></i>  
                <i>github.com/rahul-das-java-developer</i>
            </a>
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-github h5"></i>  
                <i>github.com/rahul-das-java-developer</i>
            </a>
        </div>
        <div className="col">
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-linkedin"></i>  
                <i>www.linkedin.com/in/rahul-das-java-developer</i>
            </a>
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-linkedin"></i>  
                <i>www.linkedin.com/in/rahul-das-java-developer</i>
            </a>
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-linkedin"></i>  
                <i>www.linkedin.com/in/rahul-das-java-developer</i>
            </a>
            
        </div>
        <div className="col">
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-instagram"></i> 
                <i>instagram.com/zyrn_rahul</i>
            </a>
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-instagram"></i> 
                <i>instagram.com/zyrn_rahul</i>
            </a>
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-instagram"></i> 
                <i>instagram.com/zyrn_rahul</i>
            </a>

        </div>
        <div className="col">
            <h5>Contacts us:</h5>
            <a href="#" className="icon-link mb-2">
                <i class="bi bi-whatsapp mb-2"></i> 
                {/* <i class="bi bi-telephone mb-2"></i> */}
                <i>9800428444</i>
            </a>
            <br />
            <a href="#" className="icon-link mb-2">
                {/* <i class="bi bi-whatsapp h5"></i>  */}
                <i class="bi bi-telephone mb-2"></i>
                <i>9800428444</i>
            </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer