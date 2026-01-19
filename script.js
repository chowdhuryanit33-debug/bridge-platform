
    
        function showPage(pageName) {
            var pages = document.querySelectorAll('.page');
            pages.forEach(function(page) {
                page.classList.remove('active');
            });
            document.getElementById(pageName).classList.add('active');
            window.scrollTo(0, 0);
        }

        function showRegisterForm(userType) {
            showPage('register');
            document.getElementById('userType').value = userType;
            
            var titles = {
                'investor': 'Investor Registration',
                'entrepreneur': 'Entrepreneur Registration',
                'banker': 'Banker Registration',
                'advisor': 'Business Advisor Registration'
            };
            document.getElementById('registerTitle').textContent = titles[userType];
            
            document.getElementById('entrepreneurFields').classList.add('hidden');
            document.getElementById('investorFields').classList.add('hidden');
            document.getElementById('bankerFields').classList.add('hidden');
            document.getElementById('advisorFields').classList.add('hidden');
            
            if (userType === 'entrepreneur') {
                document.getElementById('entrepreneurFields').classList.remove('hidden');
            } else if (userType === 'investor') {
                document.getElementById('investorFields').classList.remove('hidden');
            } else if (userType === 'banker') {
                document.getElementById('bankerFields').classList.remove('hidden');
            } else if (userType === 'advisor') {
                document.getElementById('advisorFields').classList.remove('hidden');
            }
        }

        function handleRegister(event) {
            event.preventDefault();
            var userType = document.getElementById('userType').value;
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            
            console.log('Registration:', { userType: userType, name: name, email: email });
            alert('Registration successful for ' + userType + '!\nWelcome, ' + name + '!');
            
            document.getElementById('registerForm').reset();
            showPage('home');
        }

        function handleLogin(event) {
            event.preventDefault();
            var email = document.getElementById('loginEmail').value;
            var userType = document.getElementById('loginUserType').value;
            
            console.log('Login:', { email: email, userType: userType });
            alert('Login successful as ' + userType + '!\nWelcome back!');
            
            document.getElementById('loginForm').reset();
            showPage('home');
        }
    