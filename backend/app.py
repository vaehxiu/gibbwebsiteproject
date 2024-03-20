from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/quiz', methods=['POST'])
def process_quiz():
    data = request.json  # Assuming JSON data is sent from frontend
    advice = generate_skincare_advice(data)  # Implement this function to generate skincare advice
    return jsonify(advice)

def generate_skincare_advice(data):
    # Process user responses and generate skincare advice based on the answers
    # Example logic:
    skin_type = data.get('skin_type')
    skin_concerns = data.get('skin_concerns')
    sunscreen_usage = data.get('sunscreen_usage')
    # Apply rules/conditions based on the answers to provide advice
    
    # Example advice:
    advice = {
        'skin_type': skin_type,
        'skin_concerns': skin_concerns,
        'sunscreen_usage': sunscreen_usage,
        'advice': 'Your personalized skincare advice goes here.'
    }
    return advice

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)  # Run the Flask app in debug mode

