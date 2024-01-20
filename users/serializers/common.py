from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class RegistrationSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email',
                  'password', 'password_confirmation', 'bio')

    def validate(self, data):
        password = data.get('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            return serializers.ValidationError('passwords does not match')

        return data

    def create(self, validate_data):
        user = User.objects.create_user(**validate_data)
        return user


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
