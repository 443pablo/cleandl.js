export const css = () => {
    return `
    #centralWidget {
      background: qlineargradient(x1: 0, y1: 0, x2: 0, y2: 1, stop: 0 #f0f0f0, stop: 1 #e0e0e0);
      padding: 20px;
    }

    #header {
      margin-bottom: 20px;
    }

    #title {
      font-size: 32px;
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }

    #subtitle {
      font-size: 14px;
      color: #666;
      margin-bottom: 20px;
    }

    #content {
      background: white;
      border-radius: 8px;
      padding: 25px;
      border: 1px solid #ddd;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    #description {
        font-size: 14px;
        color: #555;
        margin-bottom: 20px;
    }

    #features {
      margin-bottom: 20px;
    }

    QLabel#feature {
        font-size: 14px;
        color: #444;
        padding: 5px 0;
        margin: 2px 0;
    }

    #actionSection {
        margin-top: 15px;
        background: white;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    #progressBar {
        margin: 15px 0;
        height: 8px;
    }

    #status {
        font-size: 12px;
        color: #6c757d;
    }

    `
}