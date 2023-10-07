# Django WEB RTC

- This project utilizes the django and web rtc of agora for video streaming.

## WEB RTC

- Also known as Web Real Time Communication.

- Provides real time audio, video and text communication between browser and devices.

- For more information check this link out: https://www.techtarget.com/searchunifiedcommunications/definition/WebRTC-Web-Real-Time-Communications

## AGORA

- Its a service provider that provides real time communication service.

- It has free 10,000 minutes/month video streaming service.

- For more information check this link: https://www.agora.io/en/

### Project Initialization:

- **Clone this repository**

  ```bash
  git clone https://github.com/Beekeyinn/video_agora_django_learning
  ```

- **Initialize Python Environment**
  **windows**

  ```ps
  python -m venv venv
  ```

  **ubuntu/macos**

  ```sh
  python3 -m venv venv
  ```

- **Activate Environment**

  **windows**

  ```cmd
  venv\Scripts\activate
  ```

  **ubuntu/MacOs**

  ```sh
  source venv/bin/activate
  ```

- **Install requirements**

  - **Install with poetry**

    ```cmd
    pip install poetry
    ```

    _Install using pyproject.toml_

    ```cmd
    poetry install
    ```

    _install using requirements.txt_

    ```bash
    poetry install $(cat requirement.txt)
    ```

  - **install with pip**
    ```bash
    pip install -r requirements.txt
    ```

### UI REFERENCES

- https://appbuilder-docs.agora.io/customization-api/api-reference/components-api
- https://appbuilder-docs.agora.io/sdks/guides/embed_web_sdk_react
- https://appbuilder-docs.agora.io/customization-api/quickstart
