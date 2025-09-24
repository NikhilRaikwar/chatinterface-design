import React, { useState, useEffect } from 'react';
import { Key, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ApiKeyManagerProps {
  onApiKeySet?: (hasKey: boolean) => void;
}

export function ApiKeyManager({ onApiKeySet }: ApiKeyManagerProps) {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [hasStoredKey, setHasStoredKey] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedKey = localStorage.getItem('gemini-api-key');
    setHasStoredKey(!!storedKey);
    onApiKeySet?.(!!storedKey);
  }, [onApiKeySet]);

  const handleSaveKey = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('gemini-api-key', apiKey.trim());
    setHasStoredKey(true);
    setApiKey('');
    onApiKeySet?.(true);
    
    toast({
      title: "Success",
      description: "API key saved successfully",
    });
  };

  const handleRemoveKey = () => {
    localStorage.removeItem('gemini-api-key');
    setHasStoredKey(false);
    setApiKey('');
    onApiKeySet?.(false);
    
    toast({
      title: "API Key Removed",
      description: "Your API key has been removed",
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-2">
          <Key className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Gemini API Key</CardTitle>
        <CardDescription>
          {hasStoredKey 
            ? "Your API key is configured and ready to use." 
            : "Enter your Gemini API key to start chatting. Get yours at Google AI Studio."
          }
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!hasStoredKey ? (
          <>
            <div className="relative">
              <Input
                type={showKey ? "text" : "password"}
                placeholder="Enter your Gemini API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            <Button onClick={handleSaveKey} className="w-full">
              Save API Key
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Your API key is stored locally in your browser and never sent to our servers.
            </p>
          </>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-center p-3 bg-muted rounded-lg">
              <Key className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-muted-foreground">API Key Configured</span>
            </div>
            <Button onClick={handleRemoveKey} variant="outline" className="w-full">
              Remove API Key
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}