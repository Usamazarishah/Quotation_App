
import { templates } from "../../Utils/templates.js";

export default function TemplateList() {
    return (
        <div className="grid grid-cols-4">
            {templates.map((item) => (
                <div key={item.id} className="px-6 py-[18px] mt-2 cursor-pointer rounded-xl transform transition-all duration-500 
                     hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-[0.5]"
                >
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg transition-all duration-500 "/>
                </div>
            ))}
        </div>
    );
}

