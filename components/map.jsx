const Map = () => {
  return (
    <main className="flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.649381494313!2d84.8990476150269!3d22.253378085347926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201f72bbd561c3%3A0xab5c70e76a7b5a!2sNational%20Institute%20of%20Technology%2C%20Rourkela!5e0!3m2!1sen!2sin!4v1610608235068!5m2!1sen!2sin"
        frameBorder="10"
        width="90%"
        height="350"
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex="0"
        className="rounded-xl border-spacing-3 border-[5px] border-black"
      />
    </main>
  );
};

export default Map;
