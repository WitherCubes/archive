PREFIX ?=/usr

default:
	@printf "Usage:\n\tmake install\tinstall sldm\n\tmake uninstall\tuninstall sldm\n"

install:
	mkdir -p $(DESTDIR)$(PREFIX)
	cp sldm $(DESTDIR)$(PREFIX)/bin/sldm
	chmod 755 $(DESTDIR)$(PREFIX)/bin/sldm

uninstall:
	rm -f $(DESTDIR)$(PREFIX)/bin/sldm
