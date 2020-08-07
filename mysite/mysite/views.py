from django.http import HttpResponse
from django.template import loader


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def customer_service(request):
	template = loader.get_template('mysite/customer service form.html')
	context = {}
	return HttpResponse(template.render(context, request))

def welcome_page(request):
	print(request)
	if request.method == 'POST':
		firstname = request.POST.get('firstname')
		lastname = request.POST.get('lastname')
		email = request.POST.get('Email-id')
		number = request.POST.get('phonenumber')
		issue_type = request.POST.get('Issue')
		message = request.POST.get('subject')
	print(firstname, lastname)
	template = loader.get_template('mysite/Thank_you_page.html')
	context = {
	'firstname':firstname,
	'lastname':lastname,
	'email':email,
	'number':number,
	'issue_type':issue_type,
	'message':message
	}
	return HttpResponse(template.render(context, request))
	print("hello")
