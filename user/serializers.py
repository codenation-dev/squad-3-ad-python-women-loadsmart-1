from django.contrib.auth import get_user_model, authenticate
<<<<<<< HEAD
=======
from django.utils.translation import ugettext_lazy as _

>>>>>>> a837608f3b5324b28533377aa045a1afa531e965
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
<<<<<<< HEAD
    '''Customized User serializer model in core.model'''

    class Meta:
        model = get_user_model()
        fields = ('email',  'name', 'password')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 6}}
                

    def create(self, validated_data):
        """Create a new user with encrypted password and return it"""
        
=======
    """Serializer for the users object"""

    class Meta:
        model = get_user_model()
        fields = ('email', 'password', 'name')
        extra_kwargs = {'password': {'write_only': True, 'min_length': 5}}

    def create(self, validated_data):
        """Create a new user with encrypted password and return it"""
>>>>>>> a837608f3b5324b28533377aa045a1afa531e965
        return get_user_model().objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update a user, setting the password correctly and return it"""
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user


<<<<<<< HEAD
class CustomLoginSerializer(serializers.Serializer):
    '''Change defaut provided by the 'rest_auth' that need also username'''

    # Need modify REST_AUTH_SERIALIZERS 'LOGIN_SERIALIZER': 
    # https://github.com/Tivix/django-rest-auth/blob/master/rest_auth/serializers.py
    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(style={'input_type': 'password'})
=======
class AuthTokenSerializer(serializers.Serializer):
    """Serializer for the user authentication object"""
    email = serializers.CharField()
    password = serializers.CharField(
        style={'input_type': 'password'},
        trim_whitespace=False
    )

    def validate(self, attrs):
        """Validate and authenticate the user"""
        email = attrs.get('email')
        password = attrs.get('password')

        user = authenticate(
            request=self.context.get('request'),
            username=email,
            password=password
        )
        if not user:
            msg = _('Unable to authenticate with provided credentials')
            raise serializers.ValidationError(msg, code='authentication')

        attrs['user'] = user
        return attrs
>>>>>>> a837608f3b5324b28533377aa045a1afa531e965
