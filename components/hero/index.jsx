const Hero = ({ children }) => (
  <div className="uk-container">
    <div className="uk-grid uk-child-width-1-1d@s uk-child-width-expand@m uk-grid-stack" data-uk-grid>
      <div className="uk-flex uk-flex-middle">
        <div>
          {children}
        </div>
      </div>
      <div>
        <div className="uk-align-right@m">
          <img src="https://static.jusbr.com/deadpool/pro/image/image@2x.png" />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;