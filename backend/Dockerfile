FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

COPY app.py .

CMD ["python", "app.py"]

#pls dont forget static files idk where to put them just look it up later :-) 
