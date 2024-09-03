import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import './new.css'

interface Field {
    name: string;
    label: string;
    type: "text" | "textarea" | "email" | "password" | "date" | "number";
  }
  
  type FieldConfigurations = {
    [key: string]: Field[];
  };
  

const fieldConfigurations: FieldConfigurations = {
  post: [
    { name: "title", label: "Tytuł", type: "text" },
    { name: "description", label: "Krótki opis", type: "text" },
    { name: "category", label: "Kategoria", type: "text" },
    { name: "author", label: "Autor", type: "text" }
  ],
  user: [
    { name: "name", label: "Imię i nazwisko", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "password", label: "Hasło", type: "password" },
    { name: "role", label: "Rola", type: "text" }
  ],
  report: [
    { name: "title", label: "Title", type: "text" },
    { name: "content", label: "Content", type: "textarea" },
    { name: "date", label: "Date", type: "date" }
  ]
};

const New: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const fields = type ? fieldConfigurations[type] || [] : [];
  
    return (
      <div>
        {type === "user" && <Header title="Nowy użytkownik"/>}
        {type === "post" && <Header title="Nowy wpis"/>}
        {type === "report" && <Header title="Nowy raport"/>}
        
        <form>
          {fields.map((field: Field) => (
            <div key={field.name} className="form-new form-group">
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea id={field.name} name={field.name} />
              ) : (
                <input type={field.type} id={field.name} name={field.name} />
              )}
            </div>
          ))}
          <button type="submit">Utwórz</button>
        </form>
      </div>
    );
  }

export default New;
