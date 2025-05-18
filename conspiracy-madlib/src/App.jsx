import { useState } from "react";
import Results from "./Results";

const App = () => {
  const [formData, setFormData] = useState({
    topic: "",
    audience: "",
    tone: "",
    format: ""
  });
  const [submittedPrompt, setSubmittedPrompt] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the prompt with all form fields
    const promptText = `Create content about ${formData.topic} for ${formData.audience} with a ${formData.tone} tone in the format of ${formData.format}.`;
    
    // Pass the formatted prompt to Results component
    setSubmittedPrompt(promptText);
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-emerald-700">100% True Fact Generator</h1>
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4 text-emerald-600">Enter Your Requirements</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block text-gray-700 mb-2" htmlFor="topic">Topic:</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="What is your content about?"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="block text-gray-700 mb-2" htmlFor="audience">Target Audience:</label>
            <input
              type="text"
              id="audience"
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Who is this content for?"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="block text-gray-700 mb-2" htmlFor="tone">Tone:</label>
            <select
              id="tone"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select a tone</option>
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="humorous">Humorous</option>
              <option value="formal">Formal</option>
              <option value="enthusiastic">Enthusiastic</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="block text-gray-700 mb-2" htmlFor="format">Content Format:</label>
            <select
              id="format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="">Select a format</option>
              <option value="blog post">Blog Post</option>
              <option value="social media post">Social Media Post</option>
              <option value="email newsletter">Email Newsletter</option>
              <option value="script">Script</option>
              <option value="product description">Product Description</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-emerald-600 text-emerald-700 py-2 px-4 rounded-md hover:bg-emerald-700 transition duration-300"
          >
            Theorize
          </button>
        </form>
      </div>
      
      {submittedPrompt && <Results prompt={submittedPrompt} />}
    </div>
  );
};

export default App;