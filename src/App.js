import Date from "./Components/Date";
import { MdModeEditOutline } from "react-icons/md";
import { BiWifi } from "react-icons/bi";


function App() {

  return (
    <div className="App">
      <div className="container">
        <div className="row firstRow">
          <div className="col-7">
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
          <div className="col-5 cardDetails">
            
              <div className="row cardChipRow">
                <div className="col-6 cardChip">
                  <img src="/icons/cardChip.png" alt="cardChip" />
                </div>
                <div className="network col-6">
                  <BiWifi />
                </div>
              </div>
            <div className="cardDetails2">
            <div className="row creditCard">
              <div className="creditCard-bg">
                <div className="col-12">
                  <p>Jonathan Michael</p>
                </div>
                <div className="row">
                  <div className="col-3">
                    <p><strong>....</strong></p>
                  </div>
                  <div className="col-4">
                    <p>3456</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p>09/22</p>
                  </div>

                  <div className="col-6 mCard2-div">
                    <img src="/icons/mCard2.png" alt="mastercard" className="mCard2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row bg">
              <div className="col-6">
                <p className="greyText">Company</p>
              </div>
              <div className="col-6">
                <p>
                  <img src="/icons/apple.png" alt="apple" className="appleIcon" /> Apple </p>
              </div>
              <div className="col-6">
                <p className="greyText">Order Number</p>
              </div>
              <div className="col-6">
                <p>1266201</p>
              </div>
              <div className="col-6">
                <p className="greyText">Product</p>
              </div>
              <div className="col-6">
                <p>MacBook Air</p>
              </div>
              <div className="col-6">
                <p className="greyText"> Vat (20%)</p>
              </div>
              <div className="col-6">
                <p>$100.00</p>
              </div>
              <div className="col-12">
                <span className="greyText">You have to pay</span>
              </div>
              <img src="/icons/pattern.png" alt="design" className="pattern" />

              <div className="col-6 receiptDiv">
                <p><strong>549</strong>.99 <span className="greyText">USD</span></p>
              </div>
              <div className="col-6 invoiceDiv">
                <img src="/icons/invoice.png" alt="receipt" className="receipt" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
