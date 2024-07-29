const footerHTML = `
  <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="data:image/png;base64,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"/>
        <p>
          Welcome to Shivam EcomStore, <br />
          your ultimate destination for
          <br />
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> Payment Method </a>
        <a href="" target="_blank"> Delivery </a>
        <a href="" target="_blank"> Return and Exchange </a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and Code by Shivam</p>
      </div>
    </div>
  </footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);
