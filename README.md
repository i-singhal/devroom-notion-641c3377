# Notion

Room ID: 641c3377-1ff3-481e-966f-381bfcf8fe31

This workspace is managed by DevRoom agentic execution.

## Cloud Storage Setup

### Goal
Build a note taking app that summarizes notes and generates flashcards.

### Task: Set Up Cloud Storage
Configure cloud storage to back up and sync notes across devices.

### Acceptance Criteria
- Notes are automatically uploaded to the cloud.
- Syncing is seamless across multiple devices.

### Execution Plan
1. Set up a cloud storage solution that can automatically backup and sync notes.
2. Choose a cloud storage provider like AWS S3, Google Cloud Storage, or Firebase for note storage.
3. Implement authentication to securely access the cloud storage.
4. Create a backend service to handle uploads and retrieval of notes from the cloud.
5. Configure the app to automatically sync changes with the cloud storage.
6. Test syncing across multiple devices to ensure seamless operation.

### Instructions
- First, configure your cloud storage service (AWS, GCP, or Firebase) and note the access credentials.
- Implement a backend service that connects to this storage—preferably in `backend/cloud_storage_service.py`.
- Develop a syncing mechanism that continuously monitors and uploads new or changed notes—ideally in `backend/sync_mechanism.py`.
- Secure the API endpoints with authentication measures.
- Test upload and sync functionality using scripts in `tests/test_cloud_storage.py` and `tests/test_sync_mechanism.py`.
- Update this README after executing the setup to document any specific configuration or usage instructions.