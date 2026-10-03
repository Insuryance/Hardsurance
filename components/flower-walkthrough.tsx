export function FlowerWalkthrough() {
  return <section className="flower-walkthrough" aria-labelledby="flower-film-title">
    <div><p className="eyebrow">A GUIDED PRODUCT EXAMPLE</p><h3 id="flower-film-title">Flower Robotics.<br/><span>Introducing FlowerCare.</span></h3><p>See how a robotics manufacturer can configure a sample branded care program in a few steps. Then try the same workflow below.</p><ol><li>Set the brand and program name.</li><li>Select proposed benefits and a term.</li><li>Preview enrollment and customer support.</li></ol><p className="fine-print">Illustrative setup walkthrough. A live program requires eligibility, terms and service review.</p></div>
    <video controls playsInline preload="metadata" poster="/posters/flowercare-walkthrough.jpg" aria-label="Flower Robotics to FlowerCare setup walkthrough">
      <source src="/films/flowercare-walkthrough.mp4" type="video/mp4"/>
      <track kind="captions" src="/films/flowercare-walkthrough.vtt" srcLang="en" label="English" default/>
    </video>
  </section>;
}
