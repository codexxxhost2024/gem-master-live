export const settingsTemplate = `
<div class="settings-container">
    <div class="settings-group">
        <label for="apiKey">Alvaro API Key</label>
        <input type="password" id="apiKey" placeholder="Enter your Alvaro API key">
    </div>

    <div class="settings-group">
        <label for="deepgramApiKey">Alvarovoice API Key (Optional)</label>
        <input type="password" id="deepgramApiKey" placeholder="Enter your Alvarovoice API key">
    </div>

    <div class="settings-group">
        <label for="voice">Voice</label>
        <select id="voice">
            <option value="Puck">Puck</option>
            <option value="Charon">Charon</option>
            <option value="Kore">Kore</option>
            <option value="Fenrir">Fenrir</option>
            <option value="Aoede">Aoede</option>
        </select>
    </div>

    <div class="settings-group">
        <label for="sampleRate">Sample Rate</label>
        <input type="range" id="sampleRate" min="8000" max="48000" step="1000" value="16000">
        <span id="sampleRateValue">16000</span>
    </div>

    <div class="settings-group">
        <div class="collapsible" id="systemInstructionsToggle">System Instructions ▼</div>
        <div class="collapsible-content">
            <textarea id="systemInstructions" rows="4" placeholder="Enter system instructions"></textarea>
        </div>
    </div>

    <div class="settings-group">
        <div class="collapsible" id="screenCameraToggle">Screen & Camera ▼</div>
        <div class="collapsible-content">
            <div class="settings-group">
                <label for="fps">FPS (1-10)</label>
                <input type="range" id="fps" min="1" max="10" step="1" value="5">
                <span id="fpsValue">5</span>
            </div>
            <div class="settings-group">
                <label for="resizeWidth">Resize Width (640-1920)</label>
                <input type="range" id="resizeWidth" min="640" max="1920" step="80" value="1280">
                <span id="resizeWidthValue">1280</span>
            </div>
            <div class="settings-group">
                <label for="quality">Quality (0.1-1)</label>
                <input type="range" id="quality" min="0.1" max="1" step="0.1" value="0.7">
                <span id="qualityValue">0.7</span>
            </div>
        </div>
    </div>

    <div class="settings-group">
        <div class="collapsible" id="advancedToggle">Advanced Settings ▼</div>
        <div class="collapsible-content">
            <div class="settings-group">
                <label for="temperature">Temperature (0-2)</label>
                <input type="range" id="temperature" min="0" max="2" step="0.1" value="1">
                <span id="temperatureValue">1</span>
            </div>
            <div class="settings-group">
                <label for="topP">Top P (0-1)</label>
                <input type="range" id="topP" min="0" max="1" step="0.05" value="0.95">
                <span id="topPValue">0.95</span>
            </div>
            <div class="settings-group">
                <label for="topK">Top K (1-100)</label>
                <input type="range" id="topK" min="1" max="100" step="1" value="40">
                <span id="topKValue">40</span>
            </div>
        </div>
    </div>

    <div class="settings-group">
        <div class="collapsible" id="safetyToggle">Safety Settings (Blocking Strength) ▼</div>
        <div class="collapsible-content">
            <div class="settings-group">
                <label for="harassmentThreshold">Harassment (0-3)</label>
                <input type="range" id="harassmentThreshold" min="0" max="3" step="1" value="1">
                <span id="harassmentValue">1</span>
            </div>
            <div class="settings-group">
                <label for="dangerousContentThreshold">Dangerous Content (0-3)</label>
                <input type="range" id="dangerousContentThreshold" min="0" max="3" step="1" value="1">
                <span id="dangerousValue">1</span>
            </div>
            <div class="settings-group">
                <label for="sexuallyExplicitThreshold">Sexually Explicit (0-3)</label>
                <input type="range" id="sexuallyExplicitThreshold" min="0" max="3" step="1" value="1">
                <span id="sexualValue">1</span>
            </div>
            <div class="settings-group">
                <label for="civicIntegrityThreshold">Civic Integrity (0-3)</label>
                <input type="range" id="civicIntegrityThreshold" min="0" max="3" step="1" value="1">
                <span id="civicValue">1</span>
            </div>
        </div>
    </div>

    <button id="settingsSaveBtn" class="settings-save-btn">Save Settings</button>
</div>
`;
