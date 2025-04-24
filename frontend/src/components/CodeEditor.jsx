import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectItem } from '@/components/ui/select';

export default function CodeEditor() {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    const res = await fetch('http://localhost:5000/api/code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ language, code }),
    });
    const data = await res.json();
    setOutput(data.output);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-4 items-center">
      <h1 className="text-3xl font-bold mb-4">Online Code Editor</h1>

      <div className="w-full max-w-6xl grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Select value={language} onValueChange={setLanguage}>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="cpp">C++</SelectItem>
            </Select>
            <Button onClick={runCode}>Run</Button>
          </div>
          <Textarea
            rows={12}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono"
            placeholder='Write your code here...'
          />
        </Card>

        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">Output</h2>
          <pre className="bg-black text-green-400 p-3 rounded font-mono whitespace-pre-wrap">
            {output || 'Your output will appear here...'}
          </pre>
        </Card>
      </div>
    </div>
  );
}
