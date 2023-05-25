import Date from "./Components/Date";
import { MdModeEditOutline } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row firstRow">
          <div className="col-8">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="/"><strong>AceCoin</strong>Pay</a>
                < Date />
              </div>
            </nav>
            <form>
              <div className="cardNumber">
                <span className="cardNum">Card Number</span>
                <span className="cardEdit"><MdModeEditOutline /> Edit</span>
              </div>
              <h5 className="enterDigit">Enter the 16-digit card number on the card</h5>
              <div className="cardNumberInput">
                <input type="number" className="form-control placeHolder" placeholder="2412 - 7512 - 3412 - 3456" aria-label="card number" />
              </div>
              <div className="row cvv">
                <div className="col-6">
                  <h5>CVV Number</h5>
                  <span>Enter the 3 or 4 digit number on the card</span>
                </div>
                <div className="col-6">
                  <input type="number" className="form-control cvvInput" placeholder="327" aria-label="cvv number" />
                </div>
              </div>
              <div className="row expiryDate">
                <div className="col-6">
                  <h5>Expiry Date</h5>
                  <span>Enter the expiration date on the card</span>
                </div>
                <div className="col-6 expiryDate row">
                  <div className="col-5">
                    <input type="number" className="form-control expiryMonth" placeholder="09" aria-label="expiry day" />
                  </div>
                  <div className="col-2">
                    <span className="expirySlash">/</span>
                  </div>
                  <div className="col-5">
                    <input type="number" className="form-control expiryYear" placeholder="2022" aria-label="expiry year" />
                  </div>
                </div>
                <div className="password row">
                  <div className="col-6">
                    <h5>Password</h5>
                    <span>Enter your dynamic password</span>
                  </div>
                  <div className="col-6">
                    <input type="number" className="form-control passwordInput" placeholder="........" aria-label="password" />
                  </div>
                </div>
                <div className="payButton">
                  <button type="button" className="btn">Pay Now</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4">
            <p>coming soon</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
