



export default function ServiceList({ services }) {
    if (!Array.isArray(services)) {
      return <p>Nenhum serviço disponível.</p>;
    }
  
    return (
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <div className="service">
              <img src={service.icon} alt={service.altText} />
              <p>{service.text}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  